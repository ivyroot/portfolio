import * as THREE from "three";

export interface CircularColumnsProps {
    radius: number;
    numColumns: number;
    thickness: number;
    height?: number;
}

function generateCirclePoints(radius: number, numPoints: number): THREE.Vector3[] {
    const points: THREE.Vector3[] = [];
    const angleStep = 2 * Math.PI / numPoints; // Angle between each point in radians

    for (let i = 0; i < numPoints; i++) {
        const theta = i * angleStep;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);

        points.push(new THREE.Vector3(x, 0, z));
    }

    return points;
}

export const CircularColumns: React.FC<CircularColumnsProps> = ({ radius, numColumns, thickness, height = 80 }) => {
    const points = generateCirclePoints(radius, numColumns);
    return (
      <group>
        {points.map((point, i) => (
          <mesh key={i} position={point}>
            <cylinderGeometry args={[thickness, thickness, height]} />
            <meshStandardMaterial metalness={0.9} roughness={0}  color="#5555EE" />
          </mesh>
        ))}
      </group>
    );
  }