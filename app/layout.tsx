import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./home";
import Image from "next/image";
import images from "../public/images/1 Hero Section.png";
import Link from "next/link";
import Hamburgare from "./hamburgare";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <header>
          <img className="Logo" src="./images/Logo.png" alt="logo" />
          <nav>
            <p className="hamburgare">&#x2261;</p>
            <ul className="Meny">
              <li>
                <Link href={"/"}>HEM</Link>
                <button className="gul">
                  <Link href={"/users"}> Logga in</Link>
                </button>
                <button className="svart1">
                  <Link href={"/page2"}>Skapa konto</Link>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Mitten">
          <h5>
            Welcome to Loantema!
            <img
              className="Elipse"
              src="/images/Elipse.png"
              alt="Översta kortet"
            />
          </h5>
          <p className="kort">
            <img
              className="kort1"
              src="/images/Credit Card 1.png"
              alt="Översta kortet"
            />
            <img
              className="kort2"
              src="/images/Credit Card 2.png"
              alt="Översta kortet"
            />
          </p>
          <h1>Seamless Loans, Brighter Futures</h1>
          <button className="svart2">Get Started</button>
          <section className="Inne">
            For nearly 20 years, people have chosen Loantema to help fund their
            dreams See our 12,353 reviews on
            <img className="Line" src="/images/Line.png" alt="linna" />
            <img className="Raiting" src="/images/CTA.png" alt="raiting" />
          </section>
        </section>
      </body>
    </html>
  );
}
