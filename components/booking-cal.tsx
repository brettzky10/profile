

  "use client"


  import React from 'react';
  import Cal from "@calcom/embed-react";
  
  export default function BookingCal() {
    return (
      <div className="py-28">
        <Cal 
            calLink="brett-linseman-qxsquo/quick-chat"
        ></Cal>
      </div>
    );
  }





  /* 
import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";

  export default function BookingButton() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"single-session"});
		cal("floatingButton", {"calLink":"matt-lewis-an6q7b/single-session"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  }; */