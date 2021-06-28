import Express from "express"
import PaymentController from "../controllers/PaymentController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE PAGAMENTOS
router.post("/payments/createpayment", AuthForwarder, PaymentController.create)
router.post("/payments/getpaymentbyfilter", AuthForwarder, PaymentController.findPaymentByFilter)
router.post("/payments/placeholders", AuthForwarder, PaymentController.findPlaceholdersByClientId)
router.put("/payments/updatepayment/:id", AuthForwarder, PaymentController.update)
router.delete("/payments/deletepayment/:id", AuthForwarder, PaymentController.deletePaymentbyID)

export default router
