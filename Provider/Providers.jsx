"use client";
import React from "react";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { Divider, NextUIProvider } from "@nextui-org/react";
// import { createConfig, configureChains, WagmiConfig } from "wagmi";
// // import { publicProvider } from "wagmi/providers/public";
// import { SessionProvider } from "next-auth/react";
// import { mainnet } from "wagmi/chains";

// const { publicClient, webSocketPublicClient } = configureChains(
//   [mainnet],
//   [publicProvider()]
// );

// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// });

const Providers = ({ children }) => {
  const provider = new AuthProvider(
    "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
    {
      network: "mainnet",
      theme: "light",
      connectOptions: {
        compact: true,
      },
      chainConfig: {
        chainId: "80001"
      }
    }
  );
  return (
    <NextUIProvider>
      <ProvideAuth provider={provider}>
      <div
        className='bg-[#f8f9fa] text-gray-700
      transition-colors duration-200 ease-in-out'
      >
        {/* <WagmiConfig config={config}>
      <SessionProvider session={pageProps.session} refetchInterval={0}> */}
        <Divider size='large' />
        {children}
        {/* </SessionProvider>
        </WagmiConfig> */}
      </div>
      </ProvideAuth>
    </NextUIProvider>
  );
};

export default Providers;
