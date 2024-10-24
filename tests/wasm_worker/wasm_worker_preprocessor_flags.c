// This file should be compiled with -sWASM_WORKERS=1

#ifndef __EMSCRIPTEN_SHARED_MEMORY__
#error __EMSCRIPTEN_SHARED_MEMORY__ should be defined when building with -sWASM_WORKERS=1!
#endif

#ifndef __EMSCRIPTEN_WASM_WORKERS__
#error __EMSCRIPTEN_WASM_WORKERS__ should be defined when building with -sWASM_WORKERS=1!
#endif

#ifdef __EMSCRIPTEN_PTHREADS__
#error __EMSCRIPTEN_PTHREADS__ should not be defined when building with -sWASM_WORKERS=1!
#endif
