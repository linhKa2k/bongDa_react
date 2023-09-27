import React from "react";
import Card from "../components/common/Card/Card";
export default function Home() {
  return (
    <Card
      cardHeader={<p>Layout</p>}
      cardLeft={<p>cardLeft</p>}
      cardContent={<p>cardContent</p>}
      cardRight={<p>cardRight</p>}
      cardFooter={<p>cardFooter</p>}
      >
    </Card>
    
  );
}
