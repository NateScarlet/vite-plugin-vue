// this file will become a TypeScope through option `script.globalTypeFiles`
// which has a circular reference on `TypeScope._ownerScope`
// will cause all test hook timeout if not handled (issue 325)

declare namespace App {
  interface User {
    name: string
  }
}
