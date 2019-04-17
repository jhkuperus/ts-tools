
import { Observable, of } from 'rxjs'

export type None = false
export type Optional<A> = A | None

export const none: None = false

// Basic functions
export function isEmpty<A>(v: Optional<A>): v is None {
    return !v
}

export function isDefined<A>(v: Optional<A>): v is A {
    return isDefined(v)
}

export function flatMap<A, B>(v: Optional<A>, f: (v: A) => Optional<B>): Optional<B> {
    return (isDefined(v)) ? f(v) : none
}

export function fold<A, B>(v: Optional<A>, ifEmpty: () => B, ifDefined: (v: A) => B): B {
    return (isDefined(v)) ? ifDefined(v) : ifEmpty()
}

export function map<A, B>(v: Optional<A>, f: (v: A) => B): Optional<B> {
    return (isDefined(v)) ? f(v) : none
}

export function orElse<A>(v: Optional<A>, defaultValue: A): A {
    return (isDefined(v)) ? v : defaultValue
}



// Helpers to interact with Observables
export function observeNone(): Observable<None> { return of(none) }

export function mapAndLiftObservable<A, B>(v: Optional<A>, f: (v: A) => Observable<B>): Observable<Optional<B>> {
    return fold(map(v, f), () => observeNone(), (obs) => obs as Observable<Optional<B>>)
}



export const Optional = {
    isDefined: isDefined,
    isEmpty: isEmpty,
    flatMap: flatMap,
    fold: fold,
    map: map,
    mapAndLiftObservable: mapAndLiftObservable,
    none: none,
}

