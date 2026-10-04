export enum LiveRegionRole {
    /** Read when the screen reader is next idle. Almost always the right choice. */
    Status = "status",
    /** Interrupts whatever is being read. Only for something the reader must act on now. */
    Alert = "alert",
}
