// src/services/cableService.ts
import { createConsumer } from '@rails/actioncable';

const cable = createConsumer('ws://localhost:3000/cable'); // Ensure the URL matches your Rails server

export default cable;
