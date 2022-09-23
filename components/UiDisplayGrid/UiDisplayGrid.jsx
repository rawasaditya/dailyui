import Link from "next/link";
import React from "react";
import Card from "../Card/Card";

const UiDisplayGrid = () => {
  return (
    <div className="container px-4 mx-auto mt-10">
      <div className="grid grid-cols-1 gap-4 gap-y-5 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/design/figmapage">
          <a>
            <Card type="design" />
          </a>
        </Link>
        <Link href="/snippet/figmapage">
          <a>
            <Card type="code" />
          </a>
        </Link>
        <Link href="/design/figmapage">
          <a>
            <Card type="design" />
          </a>
        </Link>
        <Link href="/design/figmapage">
          <a>
            <Card type="design" />
          </a>
        </Link>
        <Link href="/design/figmapage">
          <a>
            <Card type="design" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UiDisplayGrid;
