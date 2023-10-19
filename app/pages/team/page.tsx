import useTeam from "@/app/hooks/useTeam";
import Member from "./components/Member";

const Team = () => {
    const team = useTeam();
    return ( 
        <div className="mt-[120px] flex flex-wrap justify-center gap-[30px] p-[100px]">
            {
                team.map(member => (
                    <Member 
                        key={member.name}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                        quote={member.quote}
                        description={member.description}
                        linkedin={member.linkedin}
                        instagram={member.instagram}
                        facebook={member.facebook}
                        email={member.email}
                    />
                ))
            }
        </div>
     );
}
 
export default Team;