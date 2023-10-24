import { TypeDecorator } from "@angular/core"

export function AutoUnsub(): TypeDecorator {
  return function(target: any) {
      const orig = target.prototype.ngOnDestroy
      target.prototype.ngOnDestroy = function() {
          for(const prop in this) {
              const property = this[prop]
              if(typeof property.subscribe === "function") {
                  property.unsubscribe()
              }
          }
          orig.apply()
      }
  }
}