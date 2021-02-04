const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const invoiceSchema = new Schema(
	{
		work: { type: String, required: true },
		hours: { type: Number, required: true },
		expenses: { type: Number, required: true },
		materials: { type: String, required: true },
		laborors: { type: Number, required: true },
		notes: { type: String, required: true },
	},
    
    {timestamps: true}
)

const Invoice = mongoose.model('invoice', invoiceSchema )

module.exports = Invoice