import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "../components/GameCard";
import { getGames } from "../services/games-service";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((games) => {
      const first50Games = games.slice(0, 50);
      setGames(first50Games);
    });
  }, []);

  console.log(games);
  return (
    <div>
      <Header />
      <Container>
        <Row xs={1} md={4}>
          {games.map((game) => (
            <Col key={game.id}>
              <GameCard
                key={game.title}
                title={game.title}
                image={game.thumbnail}
                description={game.short_description}
                genre={game.genre}
              ></GameCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
