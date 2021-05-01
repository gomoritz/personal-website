export function compose(...classes: (string | false)[]): string {
   return classes.filter((el) => el).join(" ")
}
