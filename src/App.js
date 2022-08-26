import JumboTron from "./components/jumbotron";
import jumbotronData from "./fixtures/jumbo.json";
function App() {
	return (
		<JumboTron.Container>
			{jumbotronData.map((item) => (
				<JumboTron direction={item.direction} key={item.id}>
					<JumboTron.Pane>
						<JumboTron.Title>{item.title}</JumboTron.Title>
						<JumboTron.Subtitle>{item.subTitle}</JumboTron.Subtitle>
					</JumboTron.Pane>
					<JumboTron.Pane>
						<JumboTron.Image src={item.image} alt={item.alt} />
					</JumboTron.Pane>
				</JumboTron>
			))}
			<JumboTron></JumboTron>
		</JumboTron.Container>
	);
}

export default App;
