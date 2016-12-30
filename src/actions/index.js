export const CODE_TOGGLE = 'CODE_TOGGLE';
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';
export const CODE_BLOCK_TRANSPARENCY = 'CODE_BLOCK_TRANSPARENCY';
export const CODE = 'CODE';
export const SEARCH = 'SEARCH';
export const DISABLE_ANIMATE = 'DISABLE_ANIMATE';
export const DISABLE_IFRAME_UPDATE = 'DISABLE_IFRAME_UPDATE';
export const ENABLE_IFRAME_UPDATE = 'ENABLE_IFRAME_UPDATE';
export const PAUSE_IFRAME_UPDATE = 'PAUSE_IFRAME_UPDATE';
export const LOAD_EXAMPLES = 'LOAD_EXAMPLES';
export const IFRAME_RESET = 'IFRAME_RESET';
export const IFRAME_DESTROY = 'IFRAME_DESTROY';


export function sbToggle() {
  return {
    type: SIDEBAR_TOGGLE
  }
}
export function iFrameReset() {
  return {
    type: IFRAME_RESET
  }
}
export function iFrameDestroy() {
  return {
    type: IFRAME_DESTROY
  }
}
export function cbToggle() {
  return {
    type: CODE_TOGGLE
  }
}
export function disableAnimate() {
  return {
    type: DISABLE_ANIMATE
  }
}
export function disableIframeUpdate(data) {
  return {
    type: DISABLE_IFRAME_UPDATE,
    data
  }
}
export function enableIframeUpdate(data) {
  return {
    type: ENABLE_IFRAME_UPDATE,
    data
  }
}
export function pauseIframeUpdate() {
  return {
    type: PAUSE_IFRAME_UPDATE
  }
}

export function codeBlockTransparency(event,data){
  return{
    type: CODE_BLOCK_TRANSPARENCY,
    data
  }
}

export function updateCode(data,path){
  return{
    type: CODE,
    data,
    path
  }
}

export function loadExamples(data){
  return{
    type: LOAD_EXAMPLES,
    data
  }
}

export function search(event){
  return{
    type: SEARCH,
    data: event.target.value
  }
}
