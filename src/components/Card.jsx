export default function Card({ user }) {
  const { name, username, address, company } = user

  return (
    <div
      role="button"
      tabIndex={0}
      className="group p-2 bg-[#2e2e2e] w-full rounded-4xl transition-shadow shadow-md hover:shadow-xl focus:outline-0 focus:shadow-xl"
    >
      <figure>
        <img
          src={`/users-image/${username}.jpg`}
          alt={`${name} 프로필`}
          className="object-cover object-center aspect-square rounded-4xl w-full shadow-sm"
        />
      </figure>
      <div className="px-5 pt-5 pb-10">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[rgba(255,255,255,0.4)] text-sm mb-5">{username}</p>
        <p className="text-xs flex flex-row gap-2">
          <span className="border px-2 py-1 border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.4)] rounded-full group-hover:text-green-500 group-hover:border-green-500 transition-colors">
            # {address.city} {address.street}
          </span>
          <span className="border px-2 py-1 border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.4)] rounded-full group-hover:text-green-500 group-hover:border-green-500 transition-colors">
            # {company.name}
          </span>
        </p>
      </div>
    </div>
  )
}
