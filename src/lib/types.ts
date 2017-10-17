// data types for TypeScript



/**
 * node-ffi-buffer extends from Buffer
 *
 * I don't found the way to merge the ffi-buffer types automatically
 * so have to copy the def from node-ffi-buffer.d.ts.
 * with it hWnd.ref() wihout error TS2339: Property 'ref' does not exist on type 'Buffer'.
 */
export interface FFIBuffer extends Buffer {
    address(): number;
    deref(): any;
    isNull(): boolean;
    readCString(offset?: number): string;
    readInt64BE(offset?: number): string;
    readInt64LE(offset?: number): string;
    readObject(offset?: number): string;
    readPointer(offset?: number): string;
    readUInt64BE(offset?: number): string;
    readUInt64LE(offset?: number): string;
    ref(): FFIBuffer;
    reinterpret(size: number, offset?: number): FFIBuffer;
    reinterpretUntilZeros(size: number, offset?: number): FFIBuffer;
    writeCString(offset: number, string: string, encoding?: string): void;
    writeInt64BE(offset: number, input: number | string): any;
    writeInt64LE(offset: number, input: number | string): any;
    writeObject(offset: number, object: Object): void;  // tslint:disable-line
    writePointer(offset: number, pointer: FFIBuffer): void;
    writeUInt64BE(offset: number, input: number | string): any;
    writeUInt64LE(offset: number, input: number | string): any;
    inspect(): string;
    // add by waiting. below extened via Buffer.prototype by ref.js
    hexAddress(): string;
}


// custome
export type PID = number;
export type PPID = number;
export type Win32FnName = string;
export type Win32FnParam = [Win32FnName, (string | object)[]];   // [returnType, [param]]
export interface Win32FnDef {
    [fn: string]: Win32FnParam;
}
export type _WIN64 = boolean;
export type _UNICODE = boolean;


// https://msdn.microsoft.com/en-us/library/windows/desktop/aa383751
export type HWND = FFIBuffer;   // for use of hWnd.ref(), deref() etc

export type ATOM = number;  // uint16
export type DWORD = number;
export type PVOID = number;
export type HANDLE = Buffer;
export type LONG_PTR = Buffer;
export type ULONG_PTR = Buffer;
export type VOID = any;
export type WCHAR  = string;
export type WORD = string;

export type BOOL = number;  // ?
export type BOOLEAN = boolean;
export type BYTE = number;
// export type CALLBACK;

export type CCHAR = string;
export type CHAR = string;
export type COLORREF = number;
// export type CONST;
export type DWORDLONG = number;
export type DWORD_PTR = Buffer;
export type DWORD32 = number;
export type DWORD64 = number;
export type FLOAT = number;
export type HACCEL = Buffer;
export type HALF_PTR = Buffer;
export type HBITMAP = Buffer;
export type HBRUSH = Buffer;
export type HCOLORSPACE = Buffer;
export type HCONV = Buffer;
export type HCONVLIST = Buffer;
export type HCURSOR = Buffer;
export type HDC = Buffer;
export type HDDEDATA = Buffer;
export type HDESK = Buffer;
export type HDROP = Buffer;
export type HDWP = Buffer;
export type HENHMETAFILE = Buffer;
export type HFILE = Buffer;    // typedef int HFILE;
export type HFONT = Buffer;
export type HGDIOBJ = Buffer;
export type HGLOBAL = Buffer;
export type HHOOK = Buffer;
export type HICON = Buffer;
export type HINSTANCE = Buffer;
export type HKEY = Buffer;
export type HKL = Buffer;
export type HLOCAL = Buffer;
export type HMENU = Buffer;
export type HMETAFILE = Buffer;
export type HMODULE = Buffer;
export type HMONITOR = Buffer;
export type HPALETTE = Buffer;
export type HPEN = Buffer;
export type HRESULT = number;
export type HRGN = Buffer;
export type HRSRC = Buffer;
export type HSZ = Buffer;
export type HWINSTA = Buffer;
export type INT = number;
export type INT_PTR = Buffer;
export type INT8 = number;
export type INT16 = number;
export type INT32 = number;
export type INT64 = number;
export type LANGID = number;
export type LCID = number;
export type LCTYPE = number;
export type LGRPID = number;
export type LONG = number;
export type LONGLONG = number;
export type LONG32 = number;
export type LONG64 = number;
export type LPARAM = Buffer;
export type LPBOOL = Buffer;
export type LPBYTE = Buffer;
export type LPCOLORREF = Buffer;
export type LPCSTR = Buffer;
export type LPCWSTR = Buffer;
export type LPCTSTR = Buffer;
export type LPVOID = Buffer;
export type LPCVOID = Buffer;
export type LPDWORD = Buffer;
export type LPHANDLE = Buffer;
export type LPINT = Buffer;
export type LPLONG = Buffer;
export type LPSTR = Buffer;
export type LPWSTR = Buffer;
export type LPTSTR = Buffer;
export type LPWORD = Buffer;
export type LRESULT = Buffer;
export type PBOOL = Buffer;
export type PBOOLEAN = Buffer;
export type PBYTE = Buffer;
export type PCHAR = Buffer;
export type PCSTR = Buffer;
export type PCTSTR = Buffer;
export type PCWSTR = Buffer;
export type PDWORD = Buffer;
export type PDWORDLONG = Buffer;
export type PDWORD_PTR = Buffer;
export type PDWORD32 = Buffer;
export type PDWORD64 = Buffer;
export type PFLOAT = Buffer;
export type PHALF_PTR = Buffer;
export type PHANDLE = Buffer;
export type PHKEY = Buffer;
export type PINT = Buffer;
export type PINT_PTR = Buffer;
export type PINT8 = Buffer;
export type PINT16 = Buffer;
export type PINT32 = Buffer;
export type PINT64 = Buffer;
export type PLCID = Buffer;
export type PLONG = Buffer;
export type PLONGLONG = Buffer;
export type PLONG_PTR = Buffer;
export type PLONG32 = Buffer;
export type PLONG64 = Buffer;
export type POINTER_32 = Buffer;
export type POINTER_64 = Buffer;
export type POINTER_SIGNED = Buffer;
export type POINTER_UNSIGNED = Buffer;
export type PSHORT = Buffer;
export type PSIZE_T = Buffer;
export type PSSIZE_T = Buffer;
export type PSTR = Buffer;
export type PTBYTE = Buffer;
export type PTCHAR = Buffer;
export type PTSTR = Buffer;
export type PUCHAR = Buffer;
export type PUHALF_PTR = Buffer;
export type PUINT = Buffer;
export type PUINT_PTR = Buffer;
export type PUINT8 = Buffer;
export type PUINT16 = Buffer;
export type PUINT32 = Buffer;
export type PUINT64 = Buffer;
export type PULONG = Buffer;
export type PULONGLONG = Buffer;
export type PULONG_PTR = Buffer;
export type PULONG32 = Buffer;
export type PULONG64 = Buffer;
export type PUSHORT = Buffer;
export type PWCHAR = Buffer;
export type PWORD = Buffer;
export type PWSTR = Buffer;
export type QWORD = Buffer;
export type SC_HANDLE = Buffer;
export type SC_LOCK = LPVOID;
export type SERVICE_STATUS_HANDLE = Buffer;
export type SHORT = number;
export type SIZE_T = Buffer;
export type SSIZE_T = Buffer;
export type TBYTE = number;
export type TCHAR = string;
export type UCHAR = string;
export type UHALF_PTR = Buffer;
export type UINT = number;
export type UINT_PTR = Buffer;
export type UINT8 = Buffer;
export type UINT16 = Buffer;
export type UINT32 = Buffer;
export type UINT64 = Buffer;
export type ULONG = Buffer;
export type ULONGLONG = Buffer;
export type ULONG32 = Buffer;
export type ULONG64 = Buffer;
export type UNICODE_STRING = {
    Length: USHORT,
    MaximumLength: USHORT,
    Buffer: PWSTR,
};
export type USHORT = number;
export type USN = number;
// export type WINAPI;
export type WPARAM = Buffer;

export type LPINITCOMMONCONTROLSEX = Buffer;  // A pointer to an INITCOMMONCONTROLSEX
export type LPWNDCLASSEX = Buffer;  // A pointer to a WNDCLASSEX
export type PWINDOWINFO = Buffer;    // A pointer to a WINDOWINFO structure


/* ------------------ structure ---------------------- */
export type INITCOMMONCONTROLSEX = Buffer;
export type LPMSG = Buffer;
export type POINT = Buffer;
export type WNDCLASSEX = Buffer;

export type WNDENUMPROC = Function;
export type WINDOWINFO = Buffer;
export type RECT = Buffer;
export type MSG = Buffer;