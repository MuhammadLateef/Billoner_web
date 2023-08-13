import React from "react";
import "./Cards.css";
import solidproof from "../assets/images/solid-proof.png";
const RoadmapCards = () => {
  return (
    <>
      <div
        className="my-5 pt-[3rem] pb-[20rem] relative"
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(302deg, rgba(2,0,36,4) 0%, rgba(68,68,74,1) 100%)",
        }}
      >
        <div className="w-[75%]  mx-auto py-4 grid lg:grid-cols-2 grid-cols-1  gap-4">
          <div>
            <h2 className="xl:text-[45px] lg:text-[45px] tracking-wide text-[30px] font-extrabold text-white">
              Roadmap
            </h2>
            <p className="text-white text-[14px] my-1 tracking-normal">
              Detailed action plan making us excited <br /> for the future of
              earntertainment.
            </p>
          </div>
          <div className="place-self-end">
            <div
              className="RoadmapCards card w-98 text-primary-content my-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{
                background: "hsla(0,5%,100%,.05)",
              }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q3 - 2022
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">
                    {" "}
                    BillionAir official website launch Whitepaper and project
                  </li>
                  <li className="my-1 ml-5 list-none">documentation release</li>
                </p>
              </div>
            </div>
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q4 - 2022
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">Start of $AIRB</li>
                  <li className="my-1 ml-5 list-none">
                    private sale Establishing partnerships Smart contract audit
                  </li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q1 - 2023
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">
                    Deployment of the raffle smart contracts
                  </li>
                  <li className="my-1 ml-5 list-none">Pilot platform launch</li>
                  <li className="my-1 ml-5 list-none">Beta testing </li>
                  <li className="my-1 ml-5 list-none">Airdrop</li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q2 - 2023
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">
                    Ambassador Influencers Marketing Campaign
                  </li>
                  <li className="my-1 ml-5 list-none">$AIRB public pre-sale</li>
                  <li className="my-1 ml-5 list-none">
                    Token generation event for $AIRB
                  </li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q3 - 2023
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">DEX & CEX listing</li>
                  <li className="my-1 ml-5 list-none">
                    Official BillionAIR platform launch
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Staking platform launch
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Phase 1 and 2 raffles launch
                  </li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q4 - 2023
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">DEX & CEX listing</li>
                  <li className="my-1 ml-5 list-none">
                    Phase 3 raffles launch
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Expanding partnerships for raffles and branded
                  </li>
                  <li className="my-1 ml-5 list-none">games</li>
                  <li className="my-1 ml-5 list-none">
                    Becoming a raffle provider for other projects
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Cross-chain gaming and raffles
                  </li>
                  <li className="my-1 ml-5 list-none">
                    New BillionAir games each month
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Mobile app development
                  </li>
                  <li className="my-1 ml-5 list-none">Improving UX/UI</li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q1 - 2024
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">
                    Adding new payment options for users
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Expanding to new geographic regions
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Enhanced security features implementation
                  </li>
                  <li className="my-1 ml-5 list-none">
                    DAO governance forming
                  </li>
                </p>
              </div>
            </div>
            {/* cards  */}
            <div
              className="card w-98 text-primary-content my-4  hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:translate-x-4 "
              style={{ background: "hsla(0,5%,100%,.05)" }}
            >
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold text-22 leading-117">
                  Q2 - 2024
                </h2>
                <p className="font-poppins font-normal text-18 leading-117">
                  <li className="my-1 ml-5 list-none">
                    Building of Metaverse environment
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Integrate Metaverse and VR games
                  </li>
                  <li className="my-1 ml-5 list-none">
                    Migrate to a fully DAO ecosystem
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-white border-4 border-[#4F5055] lg:w-[70%] w-[80%] absolute left-0 right-0 bottom-[-10rem] mx-auto  shadow-lg rounded-[30px] mt-[0rem]"
          style={{
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(302deg, rgba(2,0,56,1) 0%, rgba(68,68,74,1) 100%)",
          }}
        >
          <h2 className="lg:text-[40px]  pt-8 text-[25px] font-bold py-2 px-2">
            Deepen the knowledge
          </h2>
          <p className="text-20 font-normal py-1 px-2">
            See for yourself that BillionAir is People-centered and Trustworthy.
            Understand how our system works. Transparent and Safe.
          </p>
          <div className="text-white my-[3rem] grid md:grid-cols-3 grid-cols-1">
            <a
              href="https://docsend.com/view/s/66eqhubrbqgnuwqj"
              className=" lg:px-24 px-14 lg:py-5 py-2 my-4  bg-gradient-to-r from-indigo-800 to-pink-600 rounded-lg mx-auto hover:bg-pink-800 hover:cursor-pointer"
            >
              Onepager
            </a>
            <a
              href="https://docsend.com/view/s/66eqhubrbqgnuwqj"
              className=" lg:px-24 px-14 lg:py-5 py-2 my-4  bg-gradient-to-r from-indigo-800 to-pink-600 rounded-lg mx-auto hover:bg-pink-800 hover:cursor-pointer"
            >
              Tokenomics
            </a>
            <a
              href="https://docsend.com/view/s/66eqhubrbqgnuwqj"
              className=" lg:px-24 lg:py-5 px-14 py-2 my-4  bg-gradient-to-r from-indigo-800 to-pink-600 rounded-lg mx-auto hover:bg-pink-800 hover:cursor-pointer"
            >
              WhitesPaper
            </a>
          </div>
          <div
            className="grid md:grid-cols-2 gap-2 rounded-b-[30px] lg:py-4 py-2"
            style={{
              background: "#4568DC" /* fallback for old browsers */,
              background:
                "-webkit-linear-gradient(to right, #B06AB3, #4568DC)" /* Chrome 10-25, Safari 5.1-6 */,
              background:
                "linear-gradient(to right, #B06AB3, #4568DC)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            }}
          >
            <h2 className="md:place-self-end mx-auto md:text-[35px] text-[25px] font-semibold tracking-tighter ">
              Audit and KYC by >
            </h2>
            <img src={solidproof} alt={solidproof} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapCards;
