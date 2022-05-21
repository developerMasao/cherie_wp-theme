const { src, dest, watch } = require( 'gulp' );
const sass = require('gulp-sass')(require('sass'));

const compileSass = () =>
	src( './sass/**/*.scss' )
		.pipe( sass( { outputStyle: 'expanded' } ) )
		.pipe( dest( '../cherie' ) );

const watchSassFiles = () => watch( './sass/**/*.scss', compileSass );
exports.default = watchSassFiles;
