import Horizon from '@horizon/client'


export const hz = Horizon({host: 'localhost:8181', secure: false, authType: 'unauthenticated', lazyWrites: false })


Horizon.clearAuthTokens()


// Triggers when client successfully connects to server
hz.onReady().subscribe(
 () => console.log("Connected to Horizon server")
)

// Triggers when disconnected from server
hz.onDisconnected().subscribe(
 () => console.log("Disconnected from Horizon server")
)

// Triggers when status changes
hz.status().subscribe(
  (status) => console.log("Horizon " + status.type),
  (err) => console.log(err)
)
