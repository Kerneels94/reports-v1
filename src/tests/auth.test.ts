
import { collection, getDocs } from 'firebase/firestore';

jest.mock('firebase/firestore');

describe('getReports', () => {
  it('should fetch reports from the database', async () => {
    const mockDoc = {
      id: 'reportId',
      data: jest.fn().mockReturnValue('reportData'),
    };
    const mockQuerySnapshot = {
      forEach: jest.fn((callback) => callback(mockDoc)),
    };
    (getDocs as jest.Mock).mockResolvedValue(mockQuerySnapshot);

    await getReports();

    expect(getDocs).toHaveBeenCalledWith(collection(expect.anything(), 'reports'));
    expect(mockQuerySnapshot.forEach).toHaveBeenCalledWith(expect.any(Function));
    expect(mockDoc.data).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('reportId => reportData');
  });

  it('should handle errors when fetching reports', async () => {
    const mockError = new Error('Failed to fetch reports');
    (getDocs as jest.Mock).mockImplementationOnce(() => Promise.reject(mockError));

    console.error = jest.fn();

    await getReports();

    expect(getDocs).toHaveBeenCalledWith(collection(expect.anything(), 'reports'));
    expect(console.error).toHaveBeenCalledWith('Error getting reports: ', mockError);
  });
});

jest.mock('firebase/firestore');

describe('getReports', () => {
  it('should fetch reports from the database', async () => {
    const mockDoc = {
      id: 'reportId',
      data: jest.fn().mockReturnValue('reportData'),
    };
    const mockQuerySnapshot = {
      forEach: jest.fn((callback) => callback(mockDoc)),
    };
    getDocs.mockResolvedValue(mockQuerySnapshot);

    await getReports();

    expect(getDocs).toHaveBeenCalledWith(collection(expect.anything(), 'reports'));
    expect(mockQuerySnapshot.forEach).toHaveBeenCalledWith(expect.any(Function));
    expect(mockDoc.data).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('reportId => reportData');
  });

  it('should handle errors when fetching reports', async () => {
    const mockError = new Error('Failed to fetch reports');
    getDocs.mockRejectedValue(mockError);

    console.error = jest.fn();

    await getReports();

    expect(getDocs).toHaveBeenCalledWith(collection(expect.anything(), 'reports'));
    expect(console.error).toHaveBeenCalledWith('Error getting reports: ', mockError);
  });
});

describe('Auth', async () => {
  let auth: Auth;

  beforeEach(() => {
    auth = new Auth();
  });

  it('should initialize Firebase Authentication', () => {
    expect(auth['db']).toBeDefined();
  });

  const mockQuerySnapshot = {
    forEach: jest.fn(),
  };

  (getDocs as jest.Mock).mockResolvedValue(mockQuerySnapshot);

  await auth.getReports();

  expect(getDocs).toHaveBeenCalledWith(collection(auth['db'], 'reports'));
  expect(mockQuerySnapshot.forEach).toHaveBeenCalled();

  it('should handle errors when getting reports', async () => {
    const mockError = new Error('Failed to get reports');
    (getDocs as jest.Mock).mockRejectedValue(mockError);

    console.error = jest.fn();

    await auth.getReports();

    expect(getDocs).toHaveBeenCalledWith(collection(auth['db'], 'reports'));
    expect(console.error).toHaveBeenCalledWith('Error getting reports: ', mockError);
  });

  it('should sign up a user', async () => {
    const mockUserCredential = {
      user: {
        uid: 'userId',
      },
    };
    const mockAuth = {
      createUserWithEmailAndPassword: jest.fn().mockResolvedValue(mockUserCredential),
    };
    getAuth.mockReturnValue(mockAuth);

    const user = await auth.signUpUser();

    expect(mockAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth['email'], auth['password']);
    expect(user).toEqual(mockUserCredential.user);
  });

  it('should handle errors when signing up a user', async () => {
    const mockError = new Error('Failed to sign up');
    const mockAuth = {
      createUserWithEmailAndPassword: jest.fn().mockRejectedValue(mockError),
    };
    getAuth.mockReturnValue(mockAuth);

    console.error = jest.fn();

    await auth.signUpUser();

    expect(mockAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth['email'], auth['password']);
    expect(console.log).toHaveBeenCalledWith(mockError.code, mockError.message);
  });

  it('should sign in a user', async () => {
    const mockUserCredential = {
      user: {
        uid: 'userId',
      },
    };
    const mockAuth = {
      signInWithEmailAndPassword: jest.fn().mockResolvedValue(mockUserCredential),
    };
    getAuth.mockReturnValue(mockAuth);

    const user = await auth.signInUser();

    expect(mockAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth['email'], auth['password']);
    expect(user).toEqual(mockUserCredential.user);
  });

  it('should handle errors when signing in a user', async () => {
    const mockError = new Error('Failed to sign in');
    const mockAuth = {
      signInWithEmailAndPassword: jest.fn().mockRejectedValue(mockError),
    };
    getAuth.mockReturnValue(mockAuth);

    console.error = jest.fn();

    await auth.signInUser();

    expect(mockAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth['email'], auth['password']);
    expect(console.log).toHaveBeenCalledWith(mockError.code, mockError.message);
  });

  it('should handle sign in state change', async () => {
    const mockUser = {
      uid: 'userId',
    };
    const mockAuth = {
      onAuthStateChanged: jest.fn().mockImplementation((callback) => callback(mockUser)),
    };
    getAuth.mockReturnValue(mockAuth);

    const uid = await auth.signInStateChange();

    expect(mockAuth.onAuthStateChanged).toHaveBeenCalled();
    expect(uid).toEqual(mockUser.uid);
  });

  it('should handle sign out state change', async () => {
    const mockAuth = {
      onAuthStateChanged: jest.fn().mockImplementation((callback) => callback(null)),
    };
    getAuth.mockReturnValue(mockAuth);

    const uid = await auth.signInStateChange();

    expect(mockAuth.onAuthStateChanged).toHaveBeenCalled();
    expect(uid).toBeNull();
  });
});