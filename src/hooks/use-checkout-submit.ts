import { ICheckoutForm } from "@/types/form-d-t";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useGlobalContext from "./use-global-context";
import { notifyError, notifySuccess } from "@/utils/toast";

export default function useCheckoutSubmit(paymentIntentData: string) {
  const [loading, setLoading] = useState(false);
  const { userInfo } = useGlobalContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICheckoutForm>({
    defaultValues: {
      fname: userInfo?.user?.username,
      email: userInfo?.user?.email,
    }
  });
  const stripe = useStripe();
  const elements = useElements();
  const onSubmit: SubmitHandler<ICheckoutForm> = async (
    values: ICheckoutForm
  ) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    if (!paymentIntentData) {
      notifyError("Error creating payment intent");
      return;
    }

    setLoading(true); // Set loading state to true when submission starts
    console.log(paymentIntentData, "paymentIntentData");
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      paymentIntentData,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: values.fname,
            email: values.email,
          },
        },
      }
    );

    if (error) {
      console.log(error, "error");
      notifyError(error?.message || "Error processing payment.");
      setLoading(false); // Reset loading state in case of error
      return;
    }

    if (paymentIntent) {
      notifySuccess("Payment successful!");
      reset();
      router.push("/thank-you");
    }
    setLoading(false); // Reset loading state after successful submission
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading,
  };
}
