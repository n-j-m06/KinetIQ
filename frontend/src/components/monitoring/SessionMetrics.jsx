import { useEffect, useState } from "react";
import API_BASE from "../../api/api";

export default function SessionMetrics() {

    const [metric, setMetric] = useState(null);

    useEffect(() => {

        const fetchMetric = () => {

            fetch(`${API_BASE}/metrics`, {

                headers: {

                    Authorization: `Bearer ${localStorage.getItem("token")}`

                }

            })
            .then(r => r.json())
            .then(data => {

                if(Array.isArray(data) && data.length){

                    setMetric(data[data.length-1]);

                }

            });

        };

        fetchMetric();

        const id = setInterval(fetchMetric,2000);

        return ()=>clearInterval(id);

    },[]);

    if(!metric){

        return(

            <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">

                Loading Metrics...

            </div>

        )

    }

    return(

        <div className="rounded-3xl border border-white/10 bg-[#08111E] p-6">

            <h2 className="text-2xl font-bold">

                Current Session Metrics

            </h2>

            <div className="grid grid-cols-2 gap-6 mt-6">

                <Metric title="Attention" value={`${metric.attention_score}%`} />

                <Metric title="Fatigue" value={`${metric.fatigue_score}%`} />

                <Metric title="Risk" value={`${metric.risk_score}%`} />

                <Metric title="Head Pose" value={metric.head_pose} />

                <Metric title="Phone" value={metric.phone_detected ? "Detected" : "Not Detected"} />

                <Metric title="Seatbelt" value={metric.seatbelt ? "Fastened" : "Not Fastened"} />

            </div>

        </div>

    );

}

function Metric({title,value}){

    return(

        <div className="rounded-2xl bg-[#111C2B] p-5">

            <p className="text-slate-400">

                {title}

            </p>

            <h3 className="text-xl font-semibold mt-2">

                {value}

            </h3>

        </div>

    );

}