module.exports = (srv) => {

    const {Books} = cds.entities ('my.bookshop')

    // Reduce stock of ordered books
    srv.before ('CREATE', 'Orders', async (req) => {
        console.log("=== before ===")
        const order = req.data
        if (!order.amount || order.amount <= 0)  return req.error (400, 'Order at least 1 book')
        const tx = cds.transaction(req)
        const affectedRows = await tx.run (
        UPDATE (Books)
            .set   ({ stock: {'-=': order.amount}})
            .where ({ stock: {'>=': order.amount},/*and*/ ID: order.book_ID})
        )
        if (affectedRows === 0)  req.error (409, "Sold out, sorry")
    })

    srv.before ('READ', 'Test', each => {
        console.log("=== hogehoge ===")
        // if (each.stock > 111)  each.title += ' -- 11% discount!'
    })

    // Add some discount for overstocked books
    srv.after ('READ', 'Books', each => {
        console.log("=== After ===")
        if (each.stock > 111)  each.title += ' -- 11% discount!'
    })

}
