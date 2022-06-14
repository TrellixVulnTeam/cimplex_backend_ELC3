import { body, param, query } from 'express-validator';

class TodoValidator {
	checkCreateTodo() {
		return [
			body('customer_name')
                .notEmpty()
				.withMessage('Please Provide Customer Name'),
			body('select_product')
				.notEmpty()
				.withMessage('Please Select Specific Product'),
			body('unit_price')
				.optional()
				.notEmpty()
				.withMessage('Please Type unit price'),
			body('unit_sold')
				.optional()
				.notEmpty()
				.withMessage('Please Type unit Sold'),
			body('sale')
				.notEmpty()
				.withMessage('Please Type Sale price'),
            body('shipping_date')
				.optional()
				.notEmpty()
				.withMessage('Please Type Shipping Date'),
            body('delivery')
				.optional()
                .toBoolean()
				.notEmpty()
				.withMessage('Please Type Shipping Date'),
            body('payment')
				.optional()
                .toBoolean()
				.notEmpty()
				.withMessage('Please Type Shipping Date'),
		];
	}

    checkIdParam() {
		return [
			param('id')
				.notEmpty()
				.withMessage('The value should be not empty')
				.isUUID(4)
				.withMessage('The value should be uuid v4'),
		];
	}


    // checkReadTodo() {
	// 	return [
	// 		query('limit')
	// 			.optional()
	// 			.isInt({ min: 1, max: 10 })
	// 			.withMessage('The limit value should be number and between 1-10'),
	// 		query('offset')
	// 			.optional()
	// 			.isNumeric()
	// 			.withMessage('The value should be number'),
	// 	];
	// }
	
}

export default new TodoValidator();