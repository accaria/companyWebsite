
import Header from "../../HeaderandFooter/header/page"
import Footer from "../../HeaderandFooter/footer/page"
import { getTeamList } from "@/service/team.list"
import { TeamList } from "@/interface/team.interface"


export default async function Team(){
    const jobRole = ["PROGRAMMING","GAME DESIGN","GRAPHIC DESIGN", "PLANNING"]
    const team: TeamList [] = await getTeamList();
    const divide = Math.ceil(team.length / 4);
    const firstDiv = team.slice(0,divide);
    const secondDiv = team.slice(divide,divide*2);
    const thirdDiv = team.slice(divide*2,divide*3);
    const fourthDiv = team.slice(divide*3);
    return(
        <>
        <Header/>
        <div className="w-full h-full p-[50px] flex flex-col justify-center items-start">
        <div className="text-3xl font-bold mb-10"><h1>スタッフ紹介</h1></div>
        <p>ファルコムでの優秀なメンバーをこちらでご紹介致します！</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl">東京支店 / TOKYO BRANCH</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:gap-30">
        {firstDiv.map((member, index) => {
        const randomRole = jobRole[Math.floor(Math.random() * jobRole.length)];
        return (
            <div className="flex flex-col justify-center border-orange-400 border-4 text-center items-center max-w-xs" key={index}>
                <img src={member.picture.large} alt="Member" />
                <p>{member.name.first} {member.name.last}</p>
                <p>{member.email}</p>
                <p>{randomRole}</p> 
            </div>
        );
    })}
        </div>
        <h1 className="text-3xl">大阪支店 / OSAKA BRANCH</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:gap-30">
        {secondDiv.map((member, index) => {
        const randomRole = jobRole[Math.floor(Math.random() * jobRole.length)];
        return (
            <div className="flex flex-col justify-center border-orange-400 border-4 text-center items-center max-w-xs" key={index}>
                <img src={member.picture.large} alt="Member" />
                <p>{member.name.first} {member.name.last}</p>
                <p>{member.email}</p>
                <p>{randomRole}</p> 
            </div>
        );
    })}
        </div>
        <h1 className="text-3xl">名古屋支店 / NAGOYA BRANCH</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:gap-30">
        {thirdDiv.map((member, index) => {
        const randomRole = jobRole[Math.floor(Math.random() * jobRole.length)];
        return (
            <div className="flex flex-col justify-center border-orange-400 border-4 text-center items-center max-w-xs" key={index}>
                <img src={member.picture.large} alt="Member" />
                <p>{member.name.first} {member.name.last}</p>
                <p>{member.email}</p>
                <p>{randomRole}</p> 
            </div>
        );
    })}
        </div>
        <h1 className="text-3xl">千葉支店 / CHIBA BRANCH</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:gap-30 mb-10">
        {fourthDiv.map((member, index) => {
        const randomRole = jobRole[Math.floor(Math.random() * jobRole.length)];
        return (
            <div className="flex flex-col justify-center border-orange-400 border-4 text-center items-center max-w-xs" key={index}>
                <img src={member.picture.large} alt="Member" />
                <p>{member.name.first} {member.name.last}</p>
                <p>{member.email}</p>
                <p>{randomRole}</p> 
            </div>
        );
    })}
        </div>
        </div>
        
        <Footer/>
        </>
    )
}