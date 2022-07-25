import fastify from "fastify";

// fastify echo server for testing
const server = fastify({
	logger: true,
});
server.get("/", (request, reply) => {
	reply.send({ hello: "world" });
});
server.get("/*", (request, reply) => {
	reply.send({ url: request.url });
});

server.post("/", (request, reply) => {
	reply.send(request.body);
});
server.post("/*", (request, reply) => {
	reply.send({ body: request.body, url: request.url });
});
server.listen(8000, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	server.log.info(`server listening on ${address}`);
});
