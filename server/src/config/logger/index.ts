import { ConsoleLogger } from "@nestjs/common";

export class MyLogger extends ConsoleLogger {
    log(message: string): void {
        super.log(message)
    }

    error(message: string, stack: string): void {
        super.error(message, stack)
    }

    warn(message: string): void {
        super.warn(message)
    }

    debug(message: string): void {
        super.debug(message)
    }

    verbose(message: string): void {
        super.verbose(message)
    }
}