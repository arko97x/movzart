import DepressibleButton from "../components/DepressibleButton"
export default function Landing() {
    return (
        <>
            <div className="w-screen h-screen bg-[#560BAD] flex flex-col space-y-8 justify-center items-center font-mono font-semibold">
                <img src="gg.png" className="w-32 h-auto" />
                <a href="https://movzart.vercel.app"><DepressibleButton btnText="GET STARTED" width="w-auto" /></a>
            </div>
        </>
    )
}