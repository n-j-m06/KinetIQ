import { motion } from "framer-motion";
import {
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

const events = [

    {
        time:"10:42",
        title:"Face Detected",
        success:true,
    },

    {
        time:"10:43",
        title:"Driver Focused",
        success:true,
    },

    {
        time:"10:45",
        title:"Phone Detected",
        success:false,
    },

    {
        time:"10:47",
        title:"Driver Looking Away",
        success:false,
    },

    {
        time:"10:48",
        title:"Attention Restored",
        success:true,
    },

];

export default function EventTimeline(){

    return(

        <motion.div

        initial={{opacity:0,y:20}}

        animate={{opacity:1,y:0}}

        className="

        mt-6

        rounded-3xl

        border

        border-white/10

        bg-[#08111E]

        p-6

        "

        >

            <h2 className="text-2xl font-bold">

                Live Timeline

            </h2>

            <p className="text-slate-400 mt-1">

                Real-time AI events

            </p>

            <div className="mt-6 space-y-5">

                {events.map((event,index)=>(

                    <div

                    key={index}

                    className="flex gap-4"

                    >

                        <div className="text-slate-500 w-14">

                            {event.time}

                        </div>

                        <div>

                            {event.success ?

                            <CheckCircle2

                            className="text-green-400"

                            size={20}

                            />

                            :

                            <AlertTriangle

                            className="text-yellow-400"

                            size={20}

                            />

                            }

                        </div>

                        <div>

                            <p>

                                {event.title}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </motion.div>

    )

}