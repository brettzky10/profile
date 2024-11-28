//import prismadb from "@/lib/prismadb";
//import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";


//const webhookSecret: string = process.env.CAL_WEBHOOK_SECRET!;

const calWebhook = async (req: NextRequest) => {


    /* const user = await currentUser()

    if(!user){
        redirect("/sign-in")
    } */

	try {
		const event = await req.json();

		/* const authHeader = req.headers.get('authorization');
		if (authHeader !== `Bearer ${process.env.CAL_WEBHOOK_SECRET}`) {
			return new Response('Unauthorized', {
			status: 401,
			});
		} */
		//const sig = req.headers.get("cAL-signature")!;

		//let event: string

		/* try {
			event = Cal.webhooks.constructEvent(buf, sig, webhookSecret);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Unknown error";
			// On error, log and return the error message.
			if (err! instanceof Error) console.log(err);
			console.log(`❌ Error message: ${errorMessage}`);

			return NextResponse.json(
				{
					error: {
						message: `Webhook Error: ${errorMessage}`,
					},
				},
				{ status: 400 }
			);
		}

		// Successfully constructed event.
		console.log("✅ Success:", event.id);

		// getting to the data we want from the event
		const subscription = event.data.object as CAL.Subscription;
		const subscriptionId = subscription.id;
 */

        let triggerEvent: string
		let email: JSON
        let payload: JSON
        let responses: JSON
        let name: JSON
        let value: string
        let type: string
        let startTime: string
        let endTime: string
        let eventTitle: string


		switch (event.triggerEvent) {
			case "BOOKING_CREATED":
				 /* await prismadb.student.update({
					where: {
						email: event.payload.responses.email.value,
					},
					data: {
						credits: {decrement: 1},

					},
				}); */
                /* await prismadb.bookings.create({

                    data:{
                        startDate: event.payload.startTime as string
                    }
                }) */
                console.log("Booking created")
				console.log(event.payload.startTime)
				console.log(event.payload.endTime)
				console.log(event.payload.responses.email.value)
                toast.success("Booking created")
				break;
			case "BOOKING_CANCELLED":
                /* await prismadb.student.update({
					where: {
						email: event.payload.responses.email.value,
					},
					data: {
						credits: {increment: 1},
					},
				});
                console.log("event trigger")
				break; */

			default:
				console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
				break;
		}
		return new Response("Received!", {
			status: 200,
		  });
		// Return a response to acknowledge receipt of the event.
		return NextResponse.json({ received: true });
	} catch {
		return NextResponse.json(
			{
				error: {
					message: `Method Not Allowed`,
				},
			},
			{ status: 405 }
		).headers.set("Allow", "POST");
	}
	return new Response("Received!", {
		status: 200,
	  });
};

export { calWebhook as POST };