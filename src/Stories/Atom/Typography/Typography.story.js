import React from "react";
import { Text, Box } from "../../../Components/Atom";
import mdx from "./Typography.mdx";

export default {
  title: "Typography",
  component: Text,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Preview = () => {
  return (
    <>
      <Box>
        <Text H42>
          This is header font with font-size 42px and line-height 44px
        </Text>
      </Box>
      <Box mt={16}>
        <Text H28>
          This is header font with font-size 28px and line-height 30px
        </Text>
      </Box>
      <Box mt={16}>
        <Text H16>
          This is header font with font-size 16px and line-height 18px
        </Text>
      </Box>
      <Box mt={16}>
        <Text H14>
          This is header font with font-size 14px and line-height 16px
        </Text>
      </Box>
      <Box mt={16}>
        <Text H12>
          This is header font with font-size 12px and line-height 14px
        </Text>
      </Box>
      <Box mt={16}>
        <Text H10>
          This is header font with font-size 10px and line-height 12px
        </Text>
      </Box>
      <Box mt={16}>
        <Text B14>
          This is body font with font-size 14px and line-height 16px
        </Text>
      </Box>
      <Box mt={16}>
        <Text B12>
          This is body font with font-size 12px and line-height 14px
        </Text>
      </Box>
      <Box mt={16}>
        <Text B10>
          This is body font with font-size 10px and line-height 12px
        </Text>
      </Box>
      <Box mt={16}>
        <Text B10B>
          This is body font with font-size 10px and line-height 12px, but bolder
        </Text>
      </Box>
      <Box mt={16}>
        <Text P14>
          This is paragraph font with font-size 14px and line-height 21px
        </Text>
      </Box>
      <Box mt={16}>
        <Text P12>
          This is paragraph font with font-size 12px and line-height 18px, and
          bolder too
        </Text>
      </Box>
    </>
  );
};
