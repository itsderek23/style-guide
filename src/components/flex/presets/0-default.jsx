import React from 'react';
import Flex from '../Flex';

import Box from '../../box/Box';

export default (
  <Flex uxpId="flex-1">
    <Flex uxpId="flex-2">
      <Box uxpId="box-1" color="blue">
        This is a box 1.
      </Box>
    </Flex>
    <Flex uxpId="flex-3">
      <Box uxpId="box-2" color="blue">
        This is a box 2.
      </Box>
    </Flex>
  </Flex>
);
