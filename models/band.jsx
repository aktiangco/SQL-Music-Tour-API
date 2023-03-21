// DEPENDENCIES
const { DataTypes, Model } = require('sequelize')

//* deleted due to migration
// const { Sequelize } = require('sequelize')
// const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Band extends Model{}

// Overview
Band.init({
    // column configuration here
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    members: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
}, {
    // extra options here 
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamp: false
})



// EXPORT
module.exports = Band
