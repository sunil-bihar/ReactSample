
import { Constants } from "config/Constants";

const CacheURL = Constants.React_ENDPOINT;

const ATSHelper = {
    setCacheData: (cacheName, response) => {
        const data = new Response(JSON.stringify(response));
        if ('caches' in window) {
            caches.open(cacheName).then((cache) => {
                cache.put(CacheURL, data);
                console.log('Data Added into cache!');
            });
        } else {
            console.log('No cache supported');
        }
    },
    getCacheData: async (cacheName) => {
        if (typeof caches === 'undefined') return undefined;

        const cacheStorage = await caches.open(cacheName);
        const cachedResponse = await cacheStorage.match(CacheURL);

        if (!cachedResponse || !cachedResponse.ok) {
            console.log('Fetched failed!');
            return undefined;
        }

        response = cachedResponse.json().then(
            (item) => { item }
        );
        console.log(response);
        return response;
    }
}

export default ATSHelper;