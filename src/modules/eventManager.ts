let eventCallbacks: Record<string, Function[]> = {};

export function initEventManager() {
    window.addEventListener('message', function(event) {
        if (!event.data.isGarticCanvasToolsEvent) return;
        console.log(event.data);
    
        const type = event.data.type;
        const data = event.data.data;

        const callbacks = eventCallbacks[type];

        if (!callbacks) return;

        for (let callback of callbacks) {
            callback(data);
        }

    
    }, false);
}

export function addEventCallback(type: string, callback: Function) {
    if (!eventCallbacks[type]) {
        eventCallbacks[type] = [];
    }

    eventCallbacks[type].push(callback);
}

export function sendEvent(type: string, data: any) {
    window.parent.postMessage({ 
        isGarticCanvasToolsEvent: true,
        type: type,
        data: data
    }, '*');
}