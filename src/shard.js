const { ClusterManager } = require('discord-hybrid-sharding');
const { token, debug } = require('./config');
const { blue, cyan, green } = require('chalk');

const manager = new ClusterManager(`${__dirname}/slxxxx.js`, {
    totalShards: 10,
    shardsPerClusters: 5,
    totalClusters: 2,
    mode: 'process',
    token
});

manager.on('clusterCreate', cluster => {
    console.log(`[${green('INFO')}] :: Cluster ${cyan(cluster.id)} launched`);
});

if (debug) {
    manager.on('debug', info => {
        console.log(`[${blue('DEBUG')}] :: ${info}`);
    });
}

manager.spawn({ timeout: -1 }).catch(err => {
    console.error(`[${red('ERROR')}] :: Cluster manager failed to spawn: `, err);
});