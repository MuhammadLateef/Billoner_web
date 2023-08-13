import React from "react";
import baner from "../assets/images/banners/bg-figure.svg";
import imageSvg1 from "../assets/images/accubits.svg";
import imageSvg2 from "../assets/images/binance.svg";
import imageSvg3 from "../assets/images/bitmart.svg";
import imageSvg4 from "../assets/images/bros.svg";
import imageSvg5 from "../assets/images/card.svg";
import imageSvg6 from "../assets/images/certik1.svg";
import imageSvg7 from "../assets/images/chainlink.svg";
import imageSvg8 from "../assets/images/consulting-partners.svg";
import imageSvg9 from "../assets/images/kairon.svg";
import imageSvg10 from "../assets/images/luna-capital.png";
import imageSvg11 from "../assets/images/m3.svg";
import imageSvg12 from "../assets/images/primary-80ada38261b1c4f4.svg";
import imageSvg13 from "../assets/images/solid-proof.png";
import imageSvg14 from "../assets/images/usdt.svg";
import imageSvg15 from "../assets/images/wave-up.svg";

const EcoSystem = () => {
  return (
    <>
      <div className="" style={{ backgroundImage: `url()` }}>
        <div
          className=" h-[100vh] w-[90%] mx-auto my-5 shadow-lg bg-[#3a3b3e] rounded-[30px] p-[1.5rem]"
          style={{
            backgroundImage: `url(${baner})`,
            backgroundSize: "120%",
            backgroundPositionX: "1100px",
            backgroundPositionY: "-500px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between flex-col lg:flex-row items-center">
            <div className="lg:w-[40%] w-[90%]">
              <h2 className="md:text-[46px] text-[35px] font-[Poppins,Arial,sans-serif] font-bold text-white tracking-wide">
                <span className="text-[#ff93ff]"> BillionAir</span>
                <br /> Ecosystem
              </h2>
              <p className="text-[18px] font-normal text-white my-3 font-[Poppins,Arial,sans-serif]">
                BillionAir is a revolutionary entertainment platform connecting
                both true gamers and existing web3 users. Combined with
                blockchain tech, we provide a provably fair ecosystem bringing
                value and entertainment to a global audience.
              </p>
            </div>
            <div className="lg:w-[33%] w-[90%]">
              <div className="bg-white py-4 px-2 shadow-lg rounded-lg my-2 hover:bg-yellow-400 transition-all ease-out cursor-pointer delay-100 hover:text-gray-700 hover:translate-x-2">
                <h2 className="text-[25px] font-bold ml-5">$AIRB Token</h2>
                <p className="text-[14.5px] font-normal ml-5">
                  Platform-wide currency utilized for every transaction,
                  including purchases, staking, and earning multipliers with
                  built-in deflation.
                </p>
              </div>
              <div className="bg-white py-4 px-2 shadow-lg rounded-lg my-2 hover:bg-yellow-400 transition-all ease-out cursor-pointer delay-100 hover:text-gray-700 hover:translate-x-2">
                <h2 className="text-[25px] font-bold ml-5">
                  BillionAir NFT Ticket
                </h2>
                <p className="text-[14.5px] font-normal ml-5">
                  Bulletproof NFT, granting access to our full range of provably
                  fair raffles whilst ensuring minimal fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card sections  */}
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-6 w-[90%] mx-auto py-[3.5rem] mt-[1.5rem]  ">
          <div className="text-white max-w-lg p-3 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Staking</h2>
            <p className="text-[18px]  ">
              The BillionAir ecosystem provides a variety of safe and secure
              staking opportunities, with rewards up to <span> 240% APY. </span>{" "}
              Maximising the benefits of the available earnings can make your
              raffles, games and entertainment experience essentially free, and
              even profitable!
            </p>
          </div>
          <div className="text-white lg:col-span-2  py-3 px-6 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Raffles</h2>
            <p className="text-[18px] ">
              Dream cars, skydives, bucket list experiences and much, much more!
              You can <span> make your dreams come true </span>with our
              next-generation raffles to win and priceless time for you and your
              loved ones. Walk away with digital assets such as tokens or NFTs,
              physical goods including cars, watches, and electronics, and even
              once-in-a-lifetime trips and activities.
            </p>
          </div>
          <div className="text-white  py-3 px-6 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Tier system</h2>
            <p className="text-[18px] ">
              Everything counts! Play games, enter raffles, invite friends, or
              actively participate in the community to level up on our built-in
              tier system. Earn the opportunity to gain <span> higher </span>{" "}
              APY and greater odds of winning the main raffle prizes with
              invaluable ticket multipliers.
            </p>
          </div>
          <div className="text-white row-span-2 py-3 px-6 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Games</h2>
            <p className="text-[18px] ">
              Play games with the community, challenge your friends or take a
              shot at someone across the globe! Our entertainment ecosystem
              offers a <span> great selection </span> of thrilling games to
              satisfy even the most demanding players, ranging from chance-based
              and arcade games to cutting-edge VR-based options. As we develop
              and expand, we aim to bridge chains and expand communities,
              creating and introducing games in collaboration with
              not-yet-gamified projects.
            </p>
          </div>
          <div className="text-white row-span-2 py-3 px-6 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Buybacks</h2>
            <p className="text-[18px] ">
              Long-term sustainability and value are key focus areas within our
              vision, and this is assisted through several value creation
              mechanisms. We achieve both sustainability and constant growth
              with a built-in <span> deflationary mechanism </span> powered by a
              systematic token-burning process. Additionally, the token buyback
              program controls the circulating supply of $AIRB tokens, supports
              staking and increases token value.
            </p>
          </div>
          <div className="text-white  py-3 px-6 rounded-[50px] shadow-lg bg-[#27282D] hover:bg-[#0e0e10] hover:cursor-pointer hover:px-[3rem] transition-all ease-out delay-100">
            <h2 className="text-[30px] font-bold my-2 ">Transparency</h2>
            <p className="text-[18px] ">
              Blockchain technology, and therefore BillionAir, is decentralised,
              immutable, and unalterable. This creates a level playing field,
              making every game and raffle <span> provably fair </span>for
              everyone, without any edge over other players.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoSystem;
