function postChord(parent, args, context, info) {
    return context.prisma.createChord({
        rootNote: args.rootNote,
        chordSymbol: args.chordSymbol,
        intervals: args.intervals,
        fingerings: args.fingerings,
    })
}



module.exports = {
    postChord
}