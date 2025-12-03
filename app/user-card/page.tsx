
interface User_CardProps {
    username: string;
    roll: string;
    avatarUrl?: string;
    year: string;
}

const UserCard = ({ username, avatarUrl, roll, year }: User_CardProps) => {
    return (
        <div className="w-full max-w-sm bg-black/20 border border-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center space-y-4 transition-all hover:border-green-400/30">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-500/20 shadow-inner">
                {/* <Image
                    src={avatarUrl || "https://www.flaticon.com/free-icon/man_2202112"}
                    alt={username}
                    fill
                    className="object-cover"
                /> */}
            </div>

            <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">{username}</h2>
                <p className="text-white/60 font-medium">{roll}</p>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                Year {year}
            </div>
        </div>
    )
}

export default UserCard