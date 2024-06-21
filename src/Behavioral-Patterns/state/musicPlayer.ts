class MusicPlayer {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    // The MusicPlayer allows changing the State object at runtime.
    public transitionTo(state: State): void {
        console.log(`MusicPlayer: Transition to ${(<any>state.constructor).name}.`);
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}