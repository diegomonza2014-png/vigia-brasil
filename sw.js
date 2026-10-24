const CACHE='vigia-brasil-shell-v1';
const PRECACHE=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(PRECACHE);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('vigia-brasil-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin){
    if(!['unpkg.com','fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname))return;
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE),cached=await cache.match(request);
      if(cached)return cached;
      try{
        const response=await fetch(request);
        if(response.ok||response.type==='opaque')cache.put(request,response.clone());
        return response;
      }catch(error){return Response.error()}
    })());
    return;
  }
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request);
        if(response.ok)(await caches.open(CACHE)).put(request,response.clone());
        return response;
      }catch(error){
        return (await caches.match(request))||(await caches.match(new URL('index.html',self.registration.scope).href))||Response.error();
      }
    })());
    return;
  }
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE),cached=await cache.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok)cache.put(request,response.clone());
      return response;
    }catch(error){return cached||Response.error()}
  })());
});
