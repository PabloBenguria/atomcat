'use strict';

const pbkdf2 = require('pbkdf2-sha256');

function escapeString(username) {
  if (typeof username === 'string') {
    username = username.replace(/_/g, '\\_');
  }
  return username;
}

function getRandomSalt(textLength) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i=0; i < textLength; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      nombre: {
        type: DataTypes.STRING,
        required: true
      },
      email: {
        type: DataTypes.STRING,
        required: true
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        set: function (value) {
          const algorithm = 'pbkdf2_sha256';
          const iterations = 12000;

          let saltLength = 12;
          let salt = getRandomSalt(saltLength);

          let hashed = pbkdf2(value, new Buffer(salt), iterations, 32).toString('base64');
          let finalPass = algorithm + '$' + iterations + '$' + salt + '$' + hashed;

          this.setDataValue('password', finalPass);
        }
      },
      avatar: {
        type: DataTypes.STRING,
        required: true,
        defaultValue: 'https://firebasestorage.googleapis.com/v0/b/atomcat-1ed02.appspot.com/o/avatares%2Fdefault.jpg?alt=media&token=d602cec6-d2f7-44df-a860-7f72c48c5697'
      },
      role: {
        type: DataTypes.ENUM,
        values: ['superadmin', 'admin', 'user', 'disabled'],
        defaultValue: 'user'
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    },
    {
      paranoid: true,
      underscored: true,
      classMethods: {
        checkUsernameAndPassword: function(email, password) {
          return User.findOne({
            where: {email: {ilike: escapeString(email)}}
          })
          .then((user) => {
            if (user && user.verifyPassword(password)) {
              return user.dataValues;
            } else {
              return null;
            }
          });
      },
      instanceMethods: {
        verifyPassword: function (passwordToVerify) {
          if (typeof this.password !== 'string') {
            return false;
          }

          const algorithm = 'pbkdf2_sha256';
          let parts = this.password.split('$');
          if (parts.length !== 4) {
            return false;
          }
          let iterations = parseInt(parts[1], 10);
          let salt = parts[2];
          let hashed = pbkdf2(passwordToVerify, new Buffer(salt), iterations, 32).toString('base64');
          let finalPass = algorithm + '$' + iterations + '$' +  salt + '$' + hashed;
          return finalPass === this.password;
        }
      }
    }
  });
  return User;
};
