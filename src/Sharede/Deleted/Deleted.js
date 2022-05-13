<div className={classes.rowOneHalf}>
  <Button
    className={classes.btnPlay}
    onClick={props.soundPlay(questions[round].audio)}
  >
    <Play size={32} />
  </Button>
</div>;

<div className={classes.rowFour}>
  <div className={classes.roundScoreContainer}>
    <Container>
      <Row>
        <Col>
          <div className={classes.round}>1</div>
        </Col>
        <Col>
          <div className={classes.round}>2</div>
        </Col>
        <Col>
          <div className={classes.round}>3</div>
        </Col>
        <Col>
          <div className={classes.round}>4</div>
        </Col>
        <Col>
          <div className={classes.round}>5</div>
        </Col>
        <Col>
          <div className={classes.round}>6</div>
        </Col>
        <Col>
          <div className={classes.round}>7</div>
        </Col>
        <Col>
          <div className={classes.round}>8</div>
        </Col>
        <Col>
          <div className={classes.round}>9</div>
        </Col>
        <Col>
          <div className={classes.round}>10</div>
        </Col>
      </Row>
    </Container>
  </div>
</div>;
