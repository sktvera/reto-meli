const { TextEncoder, TextDecoder } = require('util');
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;