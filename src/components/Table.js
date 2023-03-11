import avatar1 from "../assets/avatar.png";
import avatar2 from "../assets/avatar (2).png";
import avatar3 from "../assets/avatar (3).png";
import avatar4 from "../assets/avatar (4).png";

const people = [
  {
    image: avatar1,
    name: "jdnncmkkshcnd225djchd3",
    title: "0.80 BTC",
    USDPrice: "$2,652.30",
    expireIn: "3 hours",
  },
  {
    image: avatar2,
    name: "jdnncmkkshcnd225djchd3",
    title: "0.80 BTC",
    USDPrice: "$2,652.30",
    expireIn: "12 hours",
  },
  {
    image: avatar3,
    name: "jdnncmkkshcnd225djchd3",
    title: "0.80 BTC",
    USDPrice: "$2,652.30",
    expireIn: "6 hours",
  },
  {
    image: avatar4,
    name: "jdnncmkkshcnd225djchd3",
    title: "0.80 BTC",
    USDPrice: "$2,652.30",
    expireIn: "4 hours",
  },
  // More people...
];

export default function Table() {
  return (
    <div className="bg-gradient-to-t from-[#14142F] to-[#232757] py-2 rounded-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-10">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                    >
                      From
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                    >
                      USD Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-right text-sm font-semibold text-white"
                    >
                      Expires in
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {people.map((person) => (
                    <tr key={person.USDPrice}>
                      <td className="whitespace-nowrap flex  items-center py-4 pl-4 pr-3 text-sm font-medium text-[#9006EE] sm:pl-0">
                        <img
                          src={person.image}
                          className="h-12 w-12 rounded-full mr-3"
                          alt=""
                        />
                        <p className="overflow-ellipsis">{person.name}</p>
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                        {person.USDPrice}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300 text-right">
                        {person.expireIn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
