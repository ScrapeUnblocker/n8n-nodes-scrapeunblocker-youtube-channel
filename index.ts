import { YouTubeChannelScraper } from './nodes/YouTubeChannelScraper/YouTubeChannelScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [YouTubeChannelScraper];

export const credentialTypes = [ApifyApi];
