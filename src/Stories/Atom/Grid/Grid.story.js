import React from "react";
import { Container, Row, Col, Text, Box } from "../../../Components/Atom";
import mdx from "./Grid.mdx";

export default {
  title: "Atom/Grid",
  component: [Container, Row, Col],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const _0Grid = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export const ColumnsPerRow = () => {
  return (
    <Container>
      <Row cols={1}>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 12/12</Text>
          </Box>
        </Col>
      </Row>
      <Row cols={3} mt={16}>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 3/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col 3/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 3/12</Text>
          </Box>
        </Col>
      </Row>
      <Row cols={4} mt={16}>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
      </Row>
      <Row cols={4} mt={16}>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
        <Col>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export const ColumnWidth = () => {
  return (
    <Container>
      <Row>
        <Col wide={12}>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 12/12</Text>
          </Box>
        </Col>
      </Row>
      <Row mt={16}>
        <Col wide={3}>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 3/12</Text>
          </Box>
        </Col>
        <Col wide={5}>
          <Box bg="black20" p={16}>
            <Text textAlign="center">Col 5/12</Text>
          </Box>
        </Col>
        <Col wide={4}>
          <Box bg="black30" p={16}>
            <Text textAlign="center">Col 4/12</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export const Nesting = () => {
  return (
    <Container>
      <Row>
        <Col wide={6} bg="black30" alignItems="center" p={16}>
          <Text textAlign="center">Col 6/12</Text>
        </Col>
        <Col wide={6} bg="black20" p={16}>
          <Container>
            <Row>
              <Col wide={6} bg="black30" p={16}>
                <Text textAlign="center">Col 6/12</Text>
              </Col>
              <Col wide={6} bg="black40" p={16}>
                <Text textAlign="center">Col 6/12</Text>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export const Offset = () => {
  return (
    <Container>
      <Row>
        <Col wide={3} offset={3} bg="black30" p={16}>
          <Text textAlign="center">Col 3/12, Offset 3/12</Text>
        </Col>
      </Row>
      <Row mt={16}>
        <Col wide={3} offset={2} bg="black30" p={16}>
          <Text textAlign="center">Col 3/12, Offset 2/12</Text>
        </Col>
        <Col wide={5} offset={1} bg="black30" p={16}>
          <Text textAlign="center">Col 5/12, Offset 1/12</Text>
        </Col>
      </Row>
    </Container>
  );
};
