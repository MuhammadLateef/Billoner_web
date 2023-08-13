import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Emailsubstription from "./Emailsubstription";
import TelsaCard from "./TelsaCard";
const Accomulator = () => {
  return (
    <div className="bg-[#1C1D23]">
      <TelsaCard />
      <div className="w-[80%] mx-auto flex md:flex-row flex-col justify-between items-start">
        <div className="md:w-[30%] w-full">
          <h1 className="text-[46px] font-bold text-white">FAQs</h1>
          <p className="text-white text-[20px]">
            You may have questions, we have the answers.
          </p>
        </div>
        <div className="md:w-[50%] w-full">
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow opacity-100 bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title flex justify-between items-center font-medium">
              <h2 className="text-[20px] font-bold text-white">
                What is BillionAir?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                BillionAir is a raffles and games ecosystem offering
                life-changing prizes, exciting and engaging entertainment, and
                opportunities within an all-encompassing, borderless, and
                provably fair ecosystem. On a larger scale, it’s so much more
                than that, positioned as a bridge between web3 natives and the
                traditional and web2 markets and a contra bet to the current
                web3 gaming projects out there, helping projects to fundraise
                and engage their community.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What is $AIRB, and what is its value?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                The BillionAir Token $AIRB is the native token of our ecosystem,
                giving you the real edge to have luck on your side. $AIRB, our
                platform-wide currency, is the ecosystem powering token behind
                BillionAir, working in tandem with our NFT raffle tickets. The
                token itself has value built-in across the platform, with use
                cases including staking for lucrative rewards, climbing the tier
                system earning you multipliers, favored game entries, built-in
                deflation, raffle ticket purchases, and many more perks for
                holders. As the BillionAir platform and ecosystem grow, the
                utility and price of the token will grow with it!
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What is the difference between BillionAir and other platforms?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Essentially, BillionAir is a contra bet to the current web3
                gaming projects out there, providing innovative ways for
                projects and communities to fundraise while engaging users from
                many different communities. Our raffles offer everything from
                luxury prizes and experiences, through to cash, digital assets
                and NFTs, in addition to a continuously growing selection of
                games, the BillionAir ecosystem offers opportunity and
                entertainment all-round with a minimal upfront investment. Built
                on top of blockchain technology, and therefore offering the
                underlying benefits available including tiered rewards, a
                deflationary token model and real yield staking, the
                life-changing opportunities are even greater.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What makes BillionAir sustainable in the long term?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                There are countless sustainability features integrated into our
                ecosystem, designed to safeguard our future for years to come.
                From token buyback and burn mechanisms to enticing staking
                opportunities that incentivize token locking, our platform has
                it all. And with a finite token supply, the price will only grow
                over time. And that's just the beginning - stay tuned for even
                more exciting developments to come!
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                How can I participate in the token Pre-Sale?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                To participate in our Pre-Sale, simply buy $AIRB through the
                user-friendly banners and modals available on any of our pages.
                Don’t hesitate too long! The sooner you will join, the better
                prize you get, making you great returns.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                Which exchanges will $AIRB be listed on?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Shortly after our public sale, the BillionAir Token will be
                listed on 3+ major exchanges, starting with Bitmart, with
                additional exchange listings to be announced in the coming
                weeks. Follow us on Twitter to be among the first to know about
                our exchange listings.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What network does BillionAir run on?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                BillionAir is launching on BNB-Chain (formerly known as Binance
                Smart Chain) network.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                When will it launch?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Our platform will be launched in phases, and we are excited that
                the $AIRB pre-sale is currently underway. This is an excellent
                opportunity for you to get in on the ground floor and secure
                your tokens before they are listed on major exchanges, such as
                Bitmart. After the pre-sale ends, the tokens will become
                available for everyone, and you will have the chance to claim
                yours, stake them, and earn rewards before the full platform
                launches in Q3 of 2023. Don't miss out on this exciting
                opportunity to be a part of our growing community!
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What are the vesting schedules?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                The vesting schedule indicates when tokens will be issued. The
                pre-sale vesting schedule is set so that right after the
                pre-sale you will receive 20% of the tokens and they will
                continue to vest linearly for 4 months. It means that once we’ve
                reached month 4, ALL PRE-SALE tokens will be distributed.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                How will tokens be distributed?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Once the pre-sale ends you will be able to connect your wallet
                and claim your tokens on our website www.billionair.com, at this
                time you can find more info in our section “How to claim”.
              </p>
            </div>
          </div>
          <div className="py-[30px] md:px-[20px] px-[10px] my-[20px] collapse collapse-arrow bg-[#2D2B2F]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white">
                What is our smart contract address?
              </h2>
              <a href="#" className="text-white">
                <MdArrowForwardIos className="text-white" />{" "}
              </a>
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Contract address: 0xb6b3b930af6fa095d71876d268a89def5f3e9894 You
                can find it{" "}
                <a
                  href="https://bscscan.com/address/0xb6b3b930af6fa095d71876d268a89def5f3e9894"
                  className="text-blue-500 underline"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Emailsubstription />
    </div>
  );
};

export default Accomulator;
